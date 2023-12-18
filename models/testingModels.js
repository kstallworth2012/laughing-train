const Company = require("./company");




async function getCompanies(){
		let allCompanies = await Company.findAll()

		return allCompanies
}


async function getEmployees(max){
		let allCompanies = await Company.findAll()

		return allCompanies.filter((r)=>{
				return r.numEmployees > max
			})
}


async function getCompanyName(cName) {
	// body...
	let allCompanies = await Company.findAll()
	return allCompanies.filter((n)=>{ return n.name.includes(cName) })
}

// getCompanies().then((result)=>{
// 	let filterCompanies = result.filter((c)=>{
// 		return c.numEmployees < 500
	

// 	})
// 	console.log("============filterCompanies====================")
// 	console.log(filterCompanies)
// })
// getCompanies().then((result)=>{
// 	let filterName = result.filter((n)=>{ return n.name.includes('Wi') })
// 	console.log("=============filterName===================")
// 	console.log(filterName)
// 		console.log("================================")

// })

console.log(getEmployees(900)
	.then((r)=>{
		console.log("==============getEmployees==================")
		console.log(r)
	})
	)




console.log(getCompanyName('Gar').then((r)=>{
		console.log("==============getCompanyName==================")
		console.log(r)
	})
	)