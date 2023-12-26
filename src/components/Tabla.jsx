import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { UsuarioModal } from './UsuarioModal'

export const Tabla = ({
	users,
	editarUsuario,
	showModal,
	handleClose,
	onSubmit,
	register,
	handleSubmit,
	errors,
	eliminarUsuario,
}) => {
	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell align='center'>USERID</TableCell>
							<TableCell align='center'>Title</TableCell>
							<TableCell align='center'>Completed</TableCell>
							<TableCell align='center'>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{users.map((user) => (
							<TableRow key={user.id}>
								<TableCell style={{ width: '30%' }} align='center'>
									{user.userId}
								</TableCell>
								<TableCell style={{ width: '20%' }} align='center'>
									{user.title}
								</TableCell>
								<TableCell style={{ width: '20%' }} align='center'>
									{user.completed ? '✅ ' : '❌ '}
								</TableCell>
								<TableCell style={{ width: '30%' }} align='center'>
									<Button
										onClick={() => editarUsuario(user.id)}
										sx={{ marginX: 1 }}
										variant='contained'
										color='info'
									>
										Edit
									</Button>
									<Button
										onClick={() => eliminarUsuario(user.id)}
										sx={{ marginX: 1 }}
										variant='contained'
										color='error'
									>
										Delete
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
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
