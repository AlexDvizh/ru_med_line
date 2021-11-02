import img from '../../images/shpricz1.jpg'

function Shpricz() {
  return (
    <section className="product">
        <div className="container-wrap">
            <img className="container-img" src={img} alt="Фото шприца DS310 / DS312"></img>
            <div className="container-info">
                <h2 className="container-title">Контрольный шприц с 3 кольцами DS310 / DS312</h2>
                <p className="container-text">Устройство для раздувания баллонных катетеров до 30 атмосфер. Выполнен в виде шприца с манометром и гибкой соединительной линией с вращающимся адаптером Луер на конце.</p>
                <p className="container-text">Имеет эргономичную рукоятку и механизм блокировки / разблокировки хода поршня, что позволяет работать одной рукой.</p>
                <table className="container-table">
                    <tbody className="table-wrap">
                        <tr>
                            <th>Модель</th>
                            <th>Объем, мл</th>
                            <th>Тип рукоятки</th>
                        </tr>
                        <tr>
                            <td>DS310</td>
                            <td>10</td>
                            <td>3 кольца</td>
                        </tr>
                        <tr>
                            <td>DS312</td>
                            <td>12</td>
                            <td>3 кольца</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  );
}

export default Shpricz;