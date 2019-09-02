import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
height:auto;
width:100%;
color:#9baeb4;
margin:0;
padding-top:2rem;


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
        color:white;
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
            border-radius:20px;

            @media only screen and (min-width:720px) {
                position:absolute;
                top:-17px;
                right:0;
              }
              
            



            &:hover {
                color:#9baeb4;
                border: 1px solid #9baeb4;
                background:none;

            }
        }


        input {
            border-radius:20px;
            width:100%;

        }

        .emailInput {
            position:relative;
            max-width:400px;
            margin:auto;
        }
    }
`

const Email = () => (
    <FormContainer >
        <h3><em>New Content Direct To Your Inbox</em></h3>
        <form name="contact" method="POST" data-netlify="true" action="/formSuccess">
            <input type="hidden" name="form-name" value="contact"  />
            <p>
                <label>
                    <div className="emailInput">
                    <input type="email" name="email" placeholder=" Your Email" />
                    <button type="submit">Subscribe</button>
                    </div>
                </label>
            </p>
            <p>
                
            </p>
        </form>
    </FormContainer>
  )
  
  export default Email