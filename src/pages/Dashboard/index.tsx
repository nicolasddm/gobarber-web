import React, { useState } from 'react';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars3.githubusercontent.com/u/33760054?s=460&u=2946e4e5dcf2388caa7493c0631b23f996e2c3d7&v=4"
                alt="Nicolas Dencker De Marco"
              />
              <strong>Nicolas Dencker De Marco</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>
          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/33760054?s=460&u=2946e4e5dcf2388caa7493c0631b23f996e2c3d7&v=4"
                  alt="Nicolas Dencker De Marco"
                />
                <strong>Nicolas Dencker De Marco</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                09:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/33760054?s=460&u=2946e4e5dcf2388caa7493c0631b23f996e2c3d7&v=4"
                  alt="Nicolas Dencker De Marco"
                />
                <strong>Nicolas Dencker De Marco</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                15:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/33760054?s=460&u=2946e4e5dcf2388caa7493c0631b23f996e2c3d7&v=4"
                  alt="Nicolas Dencker De Marco"
                />
                <strong>Nicolas Dencker De Marco</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
