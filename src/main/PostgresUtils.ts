import * as envJson from '../test/resources/environment.json';

const { Client } = require('pg');


class PosrgresUtils {

    private connection: any;

    async close() {
        try {
            if (this.connection) {
                console.log("trying to close connection")
                await this.connection.close()
                delete this.connection
                console.log('Attempting to print connection in close' + this.connection)
            }
        } catch (err) {
            throw new Error('close: connectoin in undefined')
        }
    }

    async connect(env: string, serviceName: string) {
       try{
        if(! this.connection) {
            this.connection = new Client(await this.getDatabaseDetails(env,serviceName));
            this.connection.connect();
            console.log("Postgress Connection is ->",this.connection);
            console.log("connection established successfully...");
        }
       }catch( err ){
        throw new Error(err);
       }
    }

    async getRecords(tableName:string,query:string) {
        const rows = this.connection.query(query);
    }

    async selectQueryWithCondition(tableName:string,columnName:string,columnValue:string) {
        let rows :any = null;
        try{
            let query = 'SELECT FROM '+tableName+' WHERE '+columnName+' in ('+columnValue+')';
            rows = await this.connection.query(query);
            console.log("select query executed successfully and result is -> ",rows);
            }catch ( err ) {
                throw new Error(err);
            }
            return rows;
    }

    async deleteQueryWithCondition(tableName:string,columnName:string,columnValue:string) {
        try{
        let query = 'DELETE FROM '+tableName+' WHERE '+columnName+' in ('+columnValue+')';
        await this.connection.query(query);
        console.log("deleted successfully for provided details {tableName"+tableName+"}{columnName"+columnName+"}{columnValue"+columnValue+"}")
        return true;
        }catch ( err ) {
            throw new Error(err);
        }
    }


    async getDatabaseDetails(env: string, serviceName: string) {
        const credentials = {
            user: envJson[env][serviceName]["user"],
            host: envJson[env][serviceName]["host"],
            password: envJson[env][serviceName]["password"],
            database: envJson[env][serviceName]["database"],
            port: envJson[env][serviceName]["port"],
        }
        return credentials;
    }
}