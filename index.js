const processPayment = () => {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			// resolve('Successfull!!!');
			reject('Failure!!!')
		},1000);
	});
}

async function promiseHandle(){
	try{
	const resolveValue = await processPayment();
	console.log(resolveValue)
 }catch (err){
	console.log(err)
 }
}

promiseHandle()

// promiseHandle().catch((err)=>{
// 	console.log(err)
// })