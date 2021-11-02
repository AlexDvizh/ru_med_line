import img from '../../images/manifold.jpg'

function Manifold() {
  return (
    <section className="product">
        <div className="container-wrap">
            <img className="container-img" src={img} alt="Фото манифолда и краников"></img>
            <div className="container-info">
                <h2 className="container-title">Манифолды и краники</h2>
                <table className="container-table container-table_indent">
                    <tbody>
                        <tr>
                            <th>Наименование</th>
                            <th>Модель</th>
                            <th>Резистентность к давлению</th>
                            <th>Тип крана</th>
                            <th>Удлинительная трубка</th>
                        </tr>
                        <tr>
                            <td>Манифолд 3-х ходовой</td>
                            <td>DM5001 (ON)</td>
                            <td>500psi</td>
                            <td>Выкл</td>
                            <td>Нет</td>
                        </tr>
                        <tr>
                            <td>Краник 2-ходовой</td>
                            <td>DM5002 (ON)</td>
                            <td>500psi</td>
                            <td>Вкл</td>
                            <td>Нет</td>
                        </tr>
                        <tr>
                            <td>Краник 2-ходовой</td>
                            <td>DM5002 (ON)</td>
                            <td>500psi</td>
                            <td>Выкл</td>
                            <td>Нет</td>
                        </tr>
                        <tr>
                            <td>Краник 2-ходовой</td>
                            <td>DM5003 (ON)</td>
                            <td>500psi</td>
                            <td>Вкл</td>
                            <td>Нет</td>
                        </tr>
                        <tr>
                            <td>Краник 2-ходовой</td>
                            <td>DM5003 (ON)</td>
                            <td>500psi</td>
                            <td>Выкл</td>
                            <td>Нет</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  );
}

export default Manifold;