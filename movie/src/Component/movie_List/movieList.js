import { useState, useEffect } from 'react';

const MovieList = () => {


const [list, setList] = useState([]);

useEffect(() => {
  const fetchData = async() => {
    const res = await fetch('https://yts.mx/api/v2/list_movies.json');
    const movieData = await res.json();
    setList(movieData.data.movies);
    console.log(movieData.data.movies);
  }
    fetchData();
    
  },[])
  
  
  return (
    <ul>
      {
      list.map(list => (
        <li key={list.id}>{list.title}
        <img src={list.medium_cover_image} alt=""/></li>
      ))}
    </ul>
  )
}
// 1. 함수 실행 -> 마운트 -> 초기list는 빈배열이기 때문에 [] 렌더
// 2. 마운트가 됐기 때문에 useEffect가 실행
// 3. setList(업데이트 함수)가 실행 -> 비동기로 api를 불러온 배열이 list에 담기게 됨
// 4. 재렌더링

export default MovieList;