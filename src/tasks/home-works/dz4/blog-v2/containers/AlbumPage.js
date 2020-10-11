import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { Dimmer, Loader, Container, Image, Header } from 'semantic-ui-react'
import useData from '../hooks/useData';
import Glide from "../../../dz2/Glide";

export default function AlbumPage() {
    const { userId, albumId } = useParams();
    const [album, , err] = useData(`/albums/${albumId}`, {});
    const [photos, isFetching ] = useData(`/albums/${albumId}/photos`, []);

    if (err && err.status === 404) {
        console.log(err);
        return <Redirect to={`/users/${userId}`} />
    }
    return (
        <Container className='page'>
            <Dimmer inverted active={isFetching}><Loader active></Loader></Dimmer>
            <Header>{album.title}</Header>
            {photos.length > 0 &&
            <Glide options={{ perView: 3 }} bullets={false}>
                {photos.map(photo => <Image src={photo.url} rounded></Image>)}
            </Glide>
            }
        </Container>
    )
}
