export default function noticeWrite() {
    return (
        <div className='blog__wrap'>
            <div className="blog__header">
                <h3>notice Write</h3>
                <p>글을 작성하시겠습니까?</p>
            </div>
            <form className='blog__form'>
                <fieldset>
                    <legend className="blind">글쓰기 영역</legend>
                    <div>
                        <label htmlFor="youName" className="required blind">글 제목</label>
                        <input type="text" placeholder="제목을 입력해주세요" />
                    </div>
                    <div>
                        <label htmlFor="youName" className="required blind">글 내용</label>
                        <textarea type="text" placeholder="내용을 입력해주세요" />
                    </div>

                    <div>
                        <label htmlFor="image" className="required blind">이미지</label>
                        <input type="file" id="image" name="image" accept="image/*" />
                    </div>

                    <button
                        type="submit"
                        className="btn__style2 mt30"
                    >글쓰기</button>
                </fieldset>
            </form>
        </div>
    )
}