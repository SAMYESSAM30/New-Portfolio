import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './skills.css'
import Frontend from './Frontend'
import { Backend } from './Backend'
const Skills = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className='skills section' id='skills'>
            <h2 className="section__title">{t("skills.title")}</h2>
            <span className="section__subtitle">{t("skills.subtitle")}</span>
            <div className="skills__container container grid">

                <Frontend />
                <Backend />
            </div>
        </section>
    )
}

export default Skills;
