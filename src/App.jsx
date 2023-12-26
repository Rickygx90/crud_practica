import { useState, useEffect } from 'react'
import { Tabla } from './components/Tabla'
import { UsuarioModal } from './components/UsuarioModal'
import { useForm } from 'react-hook-form'

function App() {
	const [users, setUsers] = useState([])
	const [showModal, setShowModal] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		resetField,
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			id: '',
			title: '',
			completed: '',
		},
	})

	const fetchData = async () => {
		const data = await fetch('https://jsonplaceholder.typicode.com/todos')
		const json = await data.json()
		setUsers(json)
	}

	useEffect(() => {
		if (users.length > 0) return
		fetchData().catch(console.error)
	}, [users])

	const handleOpen = () => setShowModal(true)
	const handleClose = () => {
		setShowModal(false)
		limpiarFormulario()
	}

	const onSubmit = async (data) => {
		const { title, id } = data
		const newArray = users.map((user) => {
			if (user.id === id) {
				user.title = title
			}
			return user
		})
		setUsers(newArray)
		handleClose()
	}

	const editarUsuario = async (id) => {
		handleOpen()
		const userToEdit = users.find((user) => user.id === id)
		setValue('id', id)
		setValue('title', userToEdit.title)
	}

	const eliminarUsuario = async (id) => {
		const userToDelete = users.find((user) => user.id === id)
		const newArray = users.filter((user) => user !== userToDelete)
		setUsers(newArray)
	}

	const limpiarFormulario = () => {
		resetField('id')
		resetField('title')
		resetField('completed')
	}

	return (
		<>
			<p>CRUD</p>
			<Tabla
				users={users}
				editarUsuario={editarUsuario}
				showModal={showModal}
				handleOpen={handleOpen}
				handleClose={handleClose}
				onSubmit={onSubmit}
				register={register}
				handleSubmit={handleSubmit}
				errors={errors}
				eliminarUsuario={eliminarUsuario}
			/>

			<UsuarioModal
				showModal={showModal}
				handleClose={handleClose}
				onSubmit={onSubmit}
				register={register}
				handleSubmit={handleSubmit}
				errors={errors}
			/>
		</>
	)
}

export default App
