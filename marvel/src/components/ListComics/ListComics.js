import { Card, Dimmer, Image, Loader, Icon, Button } from "semantic-ui-react";
import '../ListComics/ListComics.scss'


export default function ListComics({ ListComics }) {
    // console.log(ListComics);

    const { loading, result } = ListComics

    if (loading || !result) {
        return (
            <Dimmer active inverted>
                <Loader inverted>Cargando Comics</Loader>
            </Dimmer>
        );
    }

    const { results } = result.data;

    return (
        <Card.Group itemsPerRow={5}>
            {results.map((res, index) => (
                <Card key={index} className="list-comics">
                    <Image src={`${res.images[0].path}.${res.images[0].extension}`} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>
                            {res.title}
                        </Card.Header>
                        <Card.Meta>
                            <span>Digital ID: {res.id}</span>
                        </Card.Meta>
                    </Card.Content>
                    <Card.Content>
                        <Button animated fluid as="a" href={res.urls[0].url} target="_blank" color="black">
                            <Button.Content visible>Mas información</Button.Content>
                            <Button.Content hidden>
                                <Icon name="right arrow" />
                            </Button.Content>
                        </Button>
                    </Card.Content>
                </Card>
            ))}
        </Card.Group>
    )



}