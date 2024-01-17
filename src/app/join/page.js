export default  function join() {
return (
    <div className='join__wrap'>
        <div className="join__header">
            <h3>Join</h3>
            <p>블로그를 이용하실려면 회원가입은 필수!</p>
        </div>
        <form className='join__form'>
            <fieldset>
                <legend className="blind">로그인 영역</legend>
                <div>
                    <label htmlFor="youName" className="required blind">이름</label>
                    <input
                        type="text"
                        id="youName"
                        name="youName"
                        placeholder="닉네임"
                        className="input__style"
                        autoComplete='off'
                    />
                </div>

                <div style={{ marginBottom: "10px" }}>
                   
                    <button>닉네임 중복검사</button>
                </div>

                <div>
                    <label htmlFor="youEmail" className="required blind">이메일</label>
                    <input
                        type="email"
                        id="youEmail"
                        name="youEmail"
                        placeholder="이메일"
                        className="input__style"
                        autoComplete='off'
                    />
                </div>
                <div>
                    <label htmlFor="youPass" className="required blind">비밀번호</label>
                    <input
                        type="text"
                        id="youPass"
                        name="youPass"
                        placeholder="비밀번호"
                        className="input__style"
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label htmlFor="youPassC" className="required blind">확인 비밀번호</label>
                    <input
                        type="text"
                        id="youPassC"
                        name="youPassC"
                        placeholder="확인 비밀번호"
                        className="input__style"
                        autoComplete="off"
                      
                    />
                </div>
                <button  type="submit" className="btn__style2 mt30">회원가입</button>
            </fieldset>
        </form>
    </div>
    )
}
