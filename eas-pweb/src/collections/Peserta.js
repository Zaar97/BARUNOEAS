import payload from 'payload';

/** @type {import('payload/types').CollectionConfig} */

const Peserta = {
  slug: 'peserta',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
        name: 'Name',
        label: 'Name',
        type: 'text',
        required: true,
    }, 
    {
        name: 'Asal_Sekolah',
        label: 'Asal Sekolah',
        type: 'text',
        required: true,
    }, 
    {
        name: 'Email',
        label: 'Email',
        type: 'text',
        required: true,
    }, 
    {
        name: 'Status', 
        label: 'Status',
        type: 'radio', 
        required: true,
        options: [
            {
                label: 'Waiting',
                value: 'waiting',
            },
            {
                label: 'Rejected',
                value: 'rejected',
            },
            {
                label: 'Accepted',
                value: 'Accepted',
            },
        ],
        defaultValue: 'Waiting', 
        admin: {
            layout: 'horizontal',
        },
    }, 
    {
        name: "Tanggal_Pendaftaran",
        label: 'Tanggal Pendaftaran',
        type: "date",
        required: true,
        admin: {
            date: {
              pickerAppearance: 'dayAndTime',
              displayFormat: 'd MMM yyy h:mm:ss a',
            },
          },
    },

  ],
}

export default Peserta
