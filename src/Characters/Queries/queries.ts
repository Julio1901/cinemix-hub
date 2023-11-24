import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
    query ($pageNumber: Int) {
        characters(page: $pageNumber) {
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