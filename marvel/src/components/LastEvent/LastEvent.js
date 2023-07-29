import { Card, Icon, Image, Dimmer, Loader, Button, CardContent } from 'semantic-ui-react';
import './LastEvent.scss'

export default function LastEvent({ LastEvent }) {

    const { loading, result } = LastEvent;

    // Loader mientras carga la info de la api
    if (loading || !result) {
        return (<Dimmer active inverted>
            <Loader inverted />
        </Dimmer>)
    };


    const { results } = result.data;
    console.log(results);



    return results.map((event, index) => (
        <Card key={index} className='last-event'>
            <Image src={`${event.thumbnail.path}.${event.thumbnail.extension}`} wrapped ui={false} />

            <Card.Content>
                <Card.Header>{event.title}</Card.Header>
                <Card.Meta>
                    <span>
                        <Icon name="book" />
                        {event.comics.available} comics
                    </span>
                </Card.Meta>
                <Card.Description>
                    {event.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button animated fluid as="a" href={event.urls[0].url} target="_blank" color="black">
                    <Button.Content visible>Ver Evento</Button.Content>
                    <Button.Content hidden>
                        <Icon name="arrow right" />
                    </Button.Content>
                </Button>
            </Card.Content>
        </Card >
    ))
}