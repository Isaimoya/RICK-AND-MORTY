import { useEffect } from "react"
import useFect from "../hook/useFect"
import './style/cardResiden.css'
const CardResident = ({ url }) => {

    const [resident, getResident] = useFect(url)

    useEffect(() => {
        getResident()
    }, [])

    console.log(resident);

    return (
        <article className="resident">
            <header className="resident_header">
                <img className="resident_img" src={resident?.image} alt="" />
                <div className="resident_status">
                    <div className={`resident_status-circle ${resident?.status}`}></div>
                    <span className="resident_status-value">{resident?.status}</span>
                </div>
            </header>
            <section className="resident_body">
                <h3 className="residnet_name">{resident?.name}</h3>
                <hr className="resident_separator" />
                <ul className="resident_stats">
                    <li className="resident_stat-items"><span className="resident_stat-label">Species</span><span className="resident?stat-value">{resident?.species}</span></li>
                    <li className="resident_stat-items"><span className="resident_stat-label">Origin</span><span className="resident?stat-value">{resident?.origin.name}</span></li>
                    <li className="resident_stat-items"><span className="resident_stat-label">Eppisodes</span><span className="resident?stat-value">{resident?.episode.length}</span></li>
                </ul>
            </section>
        </article>
    )
}

export default CardResident