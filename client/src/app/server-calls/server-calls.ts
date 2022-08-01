const ApiPath = "/bootcemp1";


const ConectServer = () => {
   fetch(`${ApiPath}`)
      .then((res) => res.json())
      .then((data) => { console.log(data.message, "conect") });
}
const GetAll: any = (async (model: string) => {
   try {
      let res = await fetch(`${ApiPath}/${model}`);
      return res.json()
   }
   catch (error) {
      console.log(error)
   }
})
const GetBYId = async (model: string, id: string) => {
   try {
      let res = await fetch(`${ApiPath}/${model}/${id}`);
      return res.json();


   }
   catch (error) {
      console.log(error)
   }
}
const Add = async (model: string, item: any) => {
   try {
      console.log(item)
      const res = await fetch(`${ApiPath}/${model}`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(item)
      })
      return await res.json();
   }
   catch (error) {
      console.log(error)
   }
}
const Edit = async (model: string, item: any) => {
   try {
      const res = await fetch(`${ApiPath}/${model}/${item._id}`, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(item)
      })
      return await res.json();
   }
   catch (error) {
      console.log(error)
   }
}

const DeleteById = async (model: string, id: string) => {
   try {
      console.log(`${ApiPath}/${model}/${id}`)
      const res = await fetch(`${ApiPath}/${model}/${id}`, {
         method: 'DELETE'
      })
      return res.json()
   }
   catch (error) {
      console.log(error)
   }
}

export { ConectServer, GetAll, GetBYId, Add, Edit, DeleteById}


