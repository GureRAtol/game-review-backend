// schemas/review.js

export default {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Game Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 }
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'text'
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: Rule => Rule.min(0).max(10)
        },
        {
            name: 'genre',
            title: 'Genres',
            type: 'array',
            of: [
                {
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Action', value: 'action' },
                            { title: 'Adventure', value: 'adventure' },
                            { title: 'RPG', value: 'rpg' },
                            { title: 'Horror', value: 'horror' },
                            { title: 'Strategy', value: 'strategy' },
                            { title: 'Shooter', value: 'shooter' },
                            { title: 'Platformer', value: 'platformer' },
                            { title: 'Puzzle', value: 'puzzle' },
                            { title: 'Sports', value: 'sports' },
                            { title: 'Simulation', value: 'simulation' },
                            { title: 'Sci-Fi', value: 'scifi' },
                            { title: 'Survival', value: 'survival' },
                            { title: 'Other', value: 'other' }
                        ]
                    }
                }
            ]
        }
        ,
        {
            name: 'platform',
            title: 'Platform',
            type: 'string',
            options: {
                list: [
                    { title: 'PC', value: 'PC' },
                    { title: 'PS5', value: 'PS5' },
                    { title: 'PS4', value: 'PS4' },
                    { title: 'Xbox Series X', value: 'Xbox Series X' },
                    { title: 'Xbox One', value: 'Xbox One' },
                    { title: 'Nintendo Switch', value: 'Nintendo Switch' },
                    { title: 'Mobile', value: 'Mobile' },
                    { title: 'Browser', value: 'Browser' }
                ]
            }
        },
        {
            name: 'image',
            title: 'Game Cover Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'content',
            title: 'Full Review',
            type: 'text'
        }
    ]
}
