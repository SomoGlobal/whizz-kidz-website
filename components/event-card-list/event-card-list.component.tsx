import React from 'react';
import CardList from '../card-list';
import FadeInListItem from '../fade-in-list-item';
import EventCard from '../event-card';

export interface IEventCardListProps {
  label?: string;
  events: any[];
}

const EventCardList: React.FC<IEventCardListProps> = ({ events, label }) => {
  return (
    <CardList heading={label}>
      {events.map((event) => (
        <FadeInListItem key={event.slug}>
          <EventCard
            title={event.name}
            image={event.image}
            publishedAt={event.startDate}
            linkProps={{
              as: `/supporters/events/${event.slug}`,
              href: `/supporters/events/[slug]`,
            }}
          />
        </FadeInListItem>
      ))}
    </CardList>
  );
};

export default EventCardList;
