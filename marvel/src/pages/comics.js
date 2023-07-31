import { useState } from "react"
import { Grid, Header } from "semantic-ui-react"
import Container from "../components/Container"
import useFetch from '../hooks/useFetch';
import ListComics from "../components/ListComics";


export default function Comincs() {
    const [renderComics, setRenderComics] = useState(10);

    const listComics = useFetch(`${process.env.REACT_APP_URL_BASE}/comics?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=focDate&limit=${renderComics}`)
    // console.log(listComics);


    return (
        <div>
            <div className="comics-page">
                <div id="slide-comics-image" />
                <Grid>
                    <Grid.Column>
                        <Container bg="light">
                            <Header as="h2">Los ultimos comics de Marvel</Header>
                            <ListComics ListComics={listComics} renderComics={renderComics} setRenderComics={setRenderComics} />
                        </Container>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    )
}