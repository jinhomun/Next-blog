
export default  function blog() {
    return (
          <div id={'main'}>
            <div className='login__header'>
                <h3>Blog List</h3>
                <p>편하게 보고 가세요👀</p>
            </div>
            <div className='list__search'>
                <input type="text"/>
                <button>검색</button>
            </div>
            <div className='list__btn'>
                <button>최신순</button>
                <button>인기순</button>
            </div>

            <div className='list__wrap'>
                <div className='list'>
                    <span className='cate'>교육</span>
                    <div className="img">
                        <img src="https://github.com/jinhomun/Next-blog/assets/144635699/4d8ee255-79f5-4af7-b2ca-2a8e143cb5d4" alt="교육 이미지" />
                    </div>
                    <h3 className='title'>
                        편하게 글 작성해봐요.
                    </h3>
                    <p className='desc'>편하게 작성해봐요.</p>
                    <div className='auth'>
                       Jins
                    </div>
                    <div className='date'>2024.01.17 18:00</div>
                </div>
                <div className='list'>
                    <span className='cate'>교육</span>
                    <h3 className='title'>
                        편하게 글 작성해봐요.
                    </h3>
                    <p className='desc'>편하게 작성해봐요.</p>
                    <div className='auth'>
                        Jins
                    </div>
                    <div className='date'>2024.01.17 18:00</div>
                </div>
                <div className='list'>
                    <span className='cate'>교육</span>
                    <h3 className='title'>
                        편하게 글 작성해봐요.
                    </h3>
                    <p className='desc'>편하게 작성해봐요.</p>
                    <div className='auth'>
                        Jins
                    </div>
                    <div className='date'>2024.01.17 18:00</div>
                </div>
                
                
            </div>
              
             
             
          </div>
        )
}