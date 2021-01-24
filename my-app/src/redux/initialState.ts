import { Activity, User } from './model'

export const initialList: Activity[] = [
    {
        id: 0,
        propertyURL: 'https://www.perchpeek.com/properties/XyD3Slx4Rj7EaAHzVB4M',
        notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id cumque nesciunt reprehenderit vel velit libero exercitationem adipisci consequatur amet eos, illum deserunt veritatis. Animi sapiente reiciendis quas quibusdam repudiandae.'
    },
    {
        id: 1,
        propertyURL: 'https://www.perchpeek.com/properties/XyD3Slx4Rj7EaAHzVB4M',
        notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id cumque nesciunt reprehenderit vel velit libero exercitationem adipisci consequatur amet eos, illum deserunt veritatis. Animi sapiente reiciendis quas quibusdam repudiandae.'
    },
    {
        id: 2,
        propertyURL: 'https://www.perchpeek.com/properties/XyD3Slx4Rj7EaAHzVB4M',
        notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id cumque nesciunt reprehenderit vel velit libero exercitationem adipisci consequatur amet eos, illum deserunt veritatis. Animi sapiente reiciendis quas quibusdam repudiandae.'
    },
    {
        id: 3,
        propertyURL: 'https://www.perchpeek.com/properties/XyD3Slx4Rj7EaAHzVB4M',
        notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id cumque nesciunt reprehenderit vel velit libero exercitationem adipisci consequatur amet eos, illum deserunt veritatis. Animi sapiente reiciendis quas quibusdam repudiandae.'
    },
    {
        id: 4,
        propertyURL: 'https://www.perchpeek.com/properties/XyD3Slx4Rj7EaAHzVB4M',
        notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id cumque nesciunt reprehenderit vel velit libero exercitationem adipisci consequatur amet eos, illum deserunt veritatis. Animi sapiente reiciendis quas quibusdam repudiandae.',
        teamMember: {
            id: 0,
            name: 'John Doe',
            email: 'John.Doe@perchpeek.com'
        }
    }
]

export const teamMembers: User[] = [
    {  id: 0, 
        name: 'John Doe',
        email: 'John.Doe@perchpeek.com'
    },
    {
        id: 1, 
        name: 'Jane Doe',
        email: 'Jane.Doe@perchpeek.com'
    },
    {
        id: 2, 
        name: 'Joe Doe',
        email: 'Joe.Doe@perchpeek.com'
    },
    {
        id: 3, 
        name: 'Jenny Doe',
        email: 'Jenny.Doe@perchpeek.com'
    },
    {
        id: 4, 
        name: 'James Doe',
        email: 'James.Doe@perchpeek.com'
    }
]

export const client = {
    id: 4, 
    name: 'Homer Simpson',
}