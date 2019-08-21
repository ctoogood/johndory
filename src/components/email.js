import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
height:auto;
width:100%;
color:#9baeb4;
margin:0;
padding:2rem;
border-top: 0.5rem solid #6e929e;


    p {
        padding:2rem;
        text-align:center;
        margin-bottom:0;
    }

    a {
        color:white;
    }

    h3 {
        font:2rem playfair display;
        text-align:center;
        padding-top:1rem;
        color:#115974;
    }

    form {
        margin-bottom:0;
        p {
            margin:0.5rem;
            padding:0;
            margin-bottom:0;
            
        }

        button {
            padding: .1rem 1rem;
            margin-top: 1rem;
            color:white;
            border:1px solid white;
            background-color: #d2a193;
            text-decoration: none;
            font-size: 1rem;
            cursor: pointer;
            text-align: center;
            box-shadow: 0px 2px 2px rgba(0,0,0,0.1);
            font-family:montserrat;
            margin-bottom:1rem;
            transition:all 0.3s ease-in-out;

            &:hover {
                color:#9baeb4;
                border: 1px solid #9baeb4;
                background:none;

            }
        }

        input {
            border-radius:4px;
        }
    }
`

const Email = () => (
    <FormContainer >
        <h3>New Stories Direct To Your Inbox</h3>
        <form name="contact" method="POST" data-netlify="true" action="/formSuccess">
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label>Your Email:<br /> <input type="email" name="email" /></label>
            </p>
            <p>
                <button type="submit">Subscribe</button>
            </p>
        </form>
    </FormContainer>
  )
  
  export default Email