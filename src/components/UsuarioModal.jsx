import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
}

export const UsuarioModal = ({
	showModal,
	handleClose,
	onSubmit,
	register,
	handleSubmit,
	errors,
}) => {
	return (
		<Modal
			open={showModal}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>
				<div className='formulario'>
					<Typography sx={{ marginY: '12px' }} variant='h5' component='h2'>
						Edir User
					</Typography>
					<form onSubmit={handleSubmit(onSubmit)}>
						<TextField
							sx={{ display: 'none' }}
							label='ID'
							{...register('id')}
						/>
						<TextField
							fullWidth
							margin='dense'
							label='Title'
							{...register('title', { required: true })}
						/>
						{errors.title && <span>Title is required</span>}
						<Button variant='contained' type='submit'>
							Enviar
						</Button>
					</form>
				</div>
			</Box>
		</Modal>
	)
}
