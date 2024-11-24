'use client'

import React, { useEffect, useState } from 'react';
import { fetchPage } from '@/lib/wordpress/pages';

const NewsletterDialog:React.FC = () => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPage('newsletter');
            console.log(data);
            if (data.acf.title) {
                setTitle(data.acf.title);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {title}
        </div>
    )
}

export default NewsletterDialog;