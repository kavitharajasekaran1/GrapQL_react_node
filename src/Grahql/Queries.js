import { gql} from '@apollo/client'


export const LOAD_USERS_QUERY = gql`

query {
    getAllUsers{
        id 
        firstName
        email
        password
    }
}




`