import {gql} from '@apollo/client'

export const AUTH_MUTATION = gql`
mutation(
    $email: String! 
    $password: String!
    ){
    auth(
        email: $email 
        password: $password
    ){
      accessToken
      error
      success
    }
  }

`

export const REGISTER_MUTATION = gql`
mutation(
  $email: String!
  $firstName: String!
  $lastName: String!
  $password: String!
  ){
  register(
    email: $email 
    firstName: $firstName 
    lastName: $lastName 
    password: $password
  ){
    error
    message
    success
  }
}
`