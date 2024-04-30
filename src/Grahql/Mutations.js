import { gql} from '@apollo/client'

export const CREATE_USER_MUTATION = gql `

    mutuation createUser (
        $firstName: String!
        $lastName: String!
        $eamil: String!
        $password: String!        
        ) {
            createUser(firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password){
                id
            }
        }
    

`
