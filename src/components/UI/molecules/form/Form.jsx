import React, { useRef, useState } from 'react';
import './Form.css';

const Form = () => {
	const formRef = useRef(null);
	const [nameValue, setNameValue] = useState('');
	const [emailValue, setEmailValue] = useState('');
	const [messageValue, setMessageValue] = useState('');
	const [isValid, setIsValid] = useState(true);
	const [isSent, setIsSent] = useState(false);
	const handleChange = (e) => {
		switch (e.target.name) {
			case 'name':
				setNameValue(e.target.value);
				break;
			case 'email':
				setEmailValue(e.target.value);
				if (e.target.value.length > 0) {
					setIsValid(true);
				}
				break;
			case 'message':
				setMessageValue(e.target.value);
				break;
			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (emailValue.length === 0) {
			setIsValid(false);
			return;
		}
		console.log({ nameValue, emailValue, messageValue });
		setIsSent(true);
	};

	return (
		<div className='form-section-wrapper'>
			<h1>Question? We are here to help!</h1>
			<div className='form-wrapper'>
				<form ref={formRef} onSubmit={handleSubmit}>
					<div className='input-group'>
						<div className='form-group'>
							<label htmlFor='name'>NAME</label>
							<input
								type='text'
								id='name'
								onChange={handleChange}
								name='name'
								value={nameValue}></input>
						</div>
						<div className='form-group'>
							<label htmlFor='email'>EMAIL</label>
							<input
								type='email'
								id='email'
								onChange={handleChange}
								name='email'
								value={emailValue}></input>
							{!isValid && (
								<p className='req-input-field'>
									This field is required
								</p>
							)}
						</div>
					</div>

					<label htmlFor='message'>MESSAGE</label>
					<textarea
						className='form-message'
						id='message'
						onChange={handleChange}
						name='message'
						value={messageValue}
						maxLength='350'
					/>
					<button
						className={`form-submit-button ${
							!isValid && 'inactive-btn'
						}`}
						type='submit'>
						Send
					</button>
					{isSent && (
						<div
							className='submit-success'
							onClick={() => setIsSent(false)}>
							Your question has been submitted!
						</div>
					)}
				</form>
			</div>
		</div>
	);
};

export default Form;
