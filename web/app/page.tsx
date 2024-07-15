import Image from "next/image";

export default function Home() {
    return (
        <div className="container mx-auto flex justify-center text-center bg-base-100 prose p-8">
            <div className="p-4">
                <h1>得点王</h1>
                <div className="overflow-x-auto py-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>順位</th>
                                <th>大学</th>
                                <th>背番号</th>
                                <th>得点</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th> 1 </th>
                                <td> 医科歯科 </td>
                                <td> 15 </td>
                                <td> 73 </td>
                            </tr>
                            <tr>
                                <th> 2 </th>
                                <td> 群馬 </td>
                                <td> 17 </td>
                                <td> 72 </td>
                            </tr>
                            <tr>
                                <th> 3 </th>
                                <td> 東京 </td>
                                <td> 35 </td>
                                <td> 62 </td>
                            </tr>
                            <tr>
                                <th> 4 </th>
                                <td> 信州 </td>
                                <td> 6 </td>
                                <td> 62 </td>
                            </tr>
                            <tr>
                                <th> 5 </th>
                                <td> 信州 </td>
                                <td> 13 </td>
                                <td> 54 </td>
                            </tr>
                            <tr>
                                <th> 6 </th>
                                <td> 医科歯科 </td>
                                <td> 34 </td>
                                <td> 51 </td>
                            </tr>
                            <tr>
                                <th> 7 </th>
                                <td> 医科歯科 </td>
                                <td> 11 </td>
                                <td> 47 </td>
                            </tr>
                            <tr>
                                <th> 8 </th>
                                <td> 医科歯科 </td>
                                <td> 21 </td>
                                <td> 45 </td>
                            </tr>
                            <tr>
                                <th> 9 </th>
                                <td> 東京 </td>
                                <td> 64 </td>
                                <td> 44 </td>
                            </tr>
                            <tr>
                                <th> 10 </th>
                                <td> 群馬 </td>
                                <td> 11 </td>
                                <td> 43 </td>
                            </tr>
                            <tr>
                                <th> 11 </th>
                                <td> 医科歯科 </td>
                                <td> 3 </td>
                                <td> 43 </td>
                            </tr>
                            <tr>
                                <th> 12 </th>
                                <td> 群馬 </td>
                                <td> 97 </td>
                                <td> 42 </td>
                            </tr>
                            <tr>
                                <th> 13 </th>
                                <td> 東京 </td>
                                <td> 31 </td>
                                <td> 42 </td>
                            </tr>
                            <tr>
                                <th> 14 </th>
                                <td> 横市 </td>
                                <td> 4 </td>
                                <td> 40 </td>
                            </tr>
                            <tr>
                                <th> 15 </th>
                                <td> 横市 </td>
                                <td> 10 </td>
                                <td> 40 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h1>ファール王</h1>
                <div className="overflow-x-auto py-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>順位</th>
                                <th>大学</th>
                                <th>背番号</th>
                                <th>回数</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th> 1 </th>
                                <td> 横市 </td>
                                <td> 25 </td>
                                <td> 15 </td>
                            </tr>
                            <tr>
                                <th> 2 </th>
                                <td> 群馬 </td>
                                <td> 17 </td>
                                <td> 14 </td>
                            </tr>
                            <tr>
                                <th> 3 </th>
                                <td> 医科歯科 </td>
                                <td> 11 </td>
                                <td> 12 </td>
                            </tr>
                            <tr>
                                <th> 4 </th>
                                <td> 横市 </td>
                                <td> 10 </td>
                                <td> 12 </td>
                            </tr>
                            <tr>
                                <th> 5 </th>
                                <td> 群馬 </td>
                                <td> 2 </td>
                                <td> 11 </td>
                            </tr>
                            <tr>
                                <th> 6 </th>
                                <td> 群馬 </td>
                                <td> 8 </td>
                                <td> 11 </td>
                            </tr>
                            <tr>
                                <th> 7 </th>
                                <td> 群馬 </td>
                                <td> 11 </td>
                                <td> 11 </td>
                            </tr>
                            <tr>
                                <th> 8 </th>
                                <td> 医科歯科 </td>
                                <td> 34 </td>
                                <td> 11 </td>
                            </tr>
                            <tr>
                                <th> 9 </th>
                                <td> 横市 </td>
                                <td> 23 </td>
                                <td> 11 </td>
                            </tr>
                            <tr>
                                <th> 10 </th>
                                <td> 千葉 </td>
                                <td> 0 </td>
                                <td> 10 </td>
                            </tr>
                            <tr>
                                <th> 11 </th>
                                <td> 千葉 </td>
                                <td> 7 </td>
                                <td> 10 </td>
                            </tr>
                            <tr>
                                <th> 12 </th>
                                <td> 東京 </td>
                                <td> 64 </td>
                                <td> 10 </td>
                            </tr>
                            <tr>
                                <th> 13 </th>
                                <td> 横市 </td>
                                <td> 4 </td>
                                <td> 10 </td>
                            </tr>
                            <tr>
                                <th> 14 </th>
                                <td> 横市 </td>
                                <td> 27 </td>
                                <td> 10 </td>
                            </tr>
                            <tr>
                                <th> 15 </th>
                                <td> 医科歯科 </td>
                                <td> 21 </td>
                                <td> 9 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
