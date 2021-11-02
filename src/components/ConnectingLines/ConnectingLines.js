import img from '../../images/liniya-postoyannogo-davleniya.jpg'

function ConnectingLines() {
  return (
    <section className="product">
        <div className="container-wrap">
            <img className="container-img" src={img} alt="Фото соединительных линий"></img>
            <div className="container-info">
                <h2 className="container-title">Линии соединительные</h2>
                <ul>
                    <li>Резистентность к давлению 500psi.</li>
                    <li>Стандартные разъемы с внутренней и наружной резьбой.</li>
                </ul>
                <table className="container-table">
                    <tbody className="table-wrap">
                        <tr>
                            <th>Модель</th>
                            <th className="title-padding">cm</th>
                        </tr>
                        <tr>
                            <td>DT50090</td>
                            <td className="title-padding">90</td>
                        </tr>
                        <tr>
                            <td>DT500122</td>
                            <td className="title-padding">122</td>
                        </tr>
                        <tr>
                            <td>DT50090R</td>
                            <td className="title-padding">90</td>
                        </tr>
                        <tr>
                            <td>DT50030</td>
                            <td className="title-padding">30</td>
                        </tr>
                        <tr>
                            <td>DT500122R</td>
                            <td className="title-padding">122</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  );
}

export default ConnectingLines;