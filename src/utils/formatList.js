export const fomrat = async (values) => {
	const newValues = []

	return Promise.all(
		values.map(el => {

			let obj = {
				id: el.id,
				cpf: el.cpf,
				total: 0,
				store: el.store
			}

			if (el.type === '2' || el.type === '3' || el.type === '9') {
				obj.total -= parseInt(el.value)
			} else {
				obj.total += parseInt(el.value)
			}

			if (newValues.length === 0) {
				newValues.push(obj)
			} else {
				let objData = newValues.filter(el => el.cpf === obj.cpf)

				if (objData.length === 0) {
					newValues.push(obj)
				} else {
					objData = objData[0]
					objData.total += obj.total

					newValues.splice(newValues.findIndex(item => item.cpf === obj.cpf), 1)
					newValues.push(objData)
				}
			}
		})
	).then(() => newValues)
}