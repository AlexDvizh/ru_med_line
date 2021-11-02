import img from '../../images/y-konnektor.jpg'

function Yconnector() {
  return (
    <section className="product">
        <div className="container-wrap">
            <img className="container-img" src={img} alt="Фото y-коннектора"></img>
            <div className="container-info">
                <h2 className="container-title">Y-коннектор в наборе</h2>
                <table className="container-table container-table_indent">
                    <tbody>
                        <tr>
                            <th>Наименование</th>
                            <th>Модель</th>
                            <th>Устройство для введения проводника (тупая игла)</th>
                            <th>Линия соединительная</th>
                        </tr>
                        <tr>
                            <td>Защелкивающийся Y-коннектор</td>
                            <td>DPY01B</td>
                            <td>Да</td>
                            <td>Нет</td>
                        </tr>
                        <tr>
                            <td>Защелкивающийся Y-коннектор</td>
                            <td>DPY02B</td>
                            <td>Да</td>
                            <td>Да</td>
                        </tr>
                        <tr>
                            <td>Буж (торкер)</td>
                            <td>DRY01B</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  );
}

export default Yconnector;