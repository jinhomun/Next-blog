export default  function blogmodify() {
    return (
        <div className='login__wrap'>
            <div className="blog__header">
                <h3>blogmodify</h3>
                <p>글을 수정하시겠습니까?</p>
            </div>
            <form className='blog__form'>
                <fieldset>
                    <legend className="blind">글쓰기 영역</legend>
                    <div>
                        <label htmlFor="youName" className="required blind">글 제목</label>
                        <input type="text" placeholder= "제목을 입력해주세요"/>
                    </div>
                    <div>
                        <label htmlFor="youName" className="required blind">글 내용</label>
                        <textarea type="text" placeholder= "내용을 입력해주세요"/>
                    </div>

                    <img/>

                    <button
                        type="submit"
                        className="btn__style2 mt30"
                        >수정하기</button>
                </fieldset>
            </form>
        </div>
        )
}