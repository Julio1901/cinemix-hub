import { gql } from "@apollo/client";
import { ApoloClientComponent } from "../../common/Network/CinemixQuerys";

export const GET_ALL_CHARACTERS = gql`
    query {
        characters(page: 2) {
        info {
            count
                next
                prev
        }
        results {
            name
                status
                species
                gender
                image
        }
        }
        location(id: 1) {
        id
        }
        episodesByIds(ids: [1, 2]) {
        id
        }
    }
`