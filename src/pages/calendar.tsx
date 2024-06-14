import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calendars = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <Container>
            <Row className='pt-3'>
                <div className='d-flex justify-content-center col-12'>
                    <Calendar onChange={onChange} value={value} />
                </div>
            </Row>
        </Container>
    );
}

export default Calendars;