const db = require("../db")
const ExpressError = require("../ExpressError")


class Job{



	static async function getAll(){
		try{}catch(e){
			return next(e)
		}
	}


		static async function getById(id){
		try{
			const result = await db.query(`SELECT id, title,salary,company_handle FROM jobs WHERE id=$1`,[id])
			if(result.rows.length === 0){
				throw new ExpressError("JOB NOT FOUND",404)
		}
		return result.rows[0]
		}catch(e){
			return next(e)
		}
	}


		static async create(title,salary,equity,company_handle){
		try{

		if(!title){
			throw new ExpressError("need a title",400)
		}
		const results = await db.query(`INSERT INTO jobs
		 (title,salary,equity,company_handle) 
		 VALUES($1,$2,$3) RETURNING id,title`
		 ,[title,salary,equity,company_handle] )

		return results.rows[0] 
		}catch(e){
			return next(e)
		}
	}


		static async update(title,salary){
		try{

					const results = await db.query(`UPDATE jobs 
						SET title=$1, salary=$2 
						WHERE id=$3 RETURNING *`,[title,salary
				,id])
		if(results.rows.length === 0){
			throw ExpressError('Job not found',404)
		}
		return results.rows[0]
		}catch(e){
			return next(e)
		}
	}



		static async delete(id){
		try{
					const result = await db.query(`DELETE FROM jobs 
			WHERE id=$1`,[id])
		if(result.rows.length === 0){
			throw new ExpressError("Job NOT FOUND",404)
		}
		}catch(e){
			return next(e)
		}
	}

}

module.exports = Job