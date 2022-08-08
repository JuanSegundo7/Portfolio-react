import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
    const [state, handleSubmit] = useForm("mrgdzwjg");

    if (state.succeeded) {
        return <h2>Tu mensaje ha sido enviado con exito! :)</h2>;
    }
    
    return (
        <form onSubmit={handleSubmit}>
                        <input
                            id="name"
                            placeholder="Name"
                            type="text" 
                            name="Name"
                        />
                        <ValidationError 
                            prefix="Text" 
                            field="text"
                            errors={state.errors}
                        />
                        <input
                            id="email"
                            placeholder="Email"
                            type="email" 
                            name="Email"
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                        <input
                            id="name"
                            placeholder="Project Name"
                            type="text" 
                            name="Project"
                        />
                        <ValidationError 
                            prefix="Text" 
                            field="text"
                            errors={state.errors}
                        />
                        <textarea
                            id="message"
                            name="message"
                        />
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                        <button type="submit" disabled={state.submitting}>
                            Submit
                        </button>
        </form>
    );
}

export default Form;
