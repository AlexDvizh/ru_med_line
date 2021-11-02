import img from '../../images/shpricz-indeflyator.jpg'

function Indeflyator() {
  return (
    <section className="product">
        <div className="container-wrap">
            <img className="container-img" src={img} alt="Фото индефлятора DID30S"></img>
            <div className="container-info">
                <h2 className="container-title">Шприц-индефлятор DID30S (OFF)</h2>
                <p className="container-text">Устройство для раздувания баллонных катетеров до 30 атмосфер. Выполнен в виде шприца с манометром и гибкой соединительной линией с вращающимся адаптером Луер на конце.</p>
                <p className="container-text">Имеет эргономичную рукоятку и механизм блокировки / разблокировки хода поршня, что позволяет работать одной рукой.</p>
                <table className="container-table">
                    <tbody className="table-wrap">
                        <tr>
                            <th>Наименование</th>
                            <th>Модель</th>
                            <th>Номинальное максимальное давление, атм</th>
                            <th>Объем, ml</th>
                            <th>Кран 3-х ходовой</th>
                        </tr>
                        <tr>
                            <td>Mastro Баллонный индефлятор</td>
                            <td>DID30S (OFF)</td>
                            <td>30</td>
                            <td>20</td>
                            <td>Да</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  );
}

export default Indeflyator;