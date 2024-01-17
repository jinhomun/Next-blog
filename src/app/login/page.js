export default  function login() {
return (
    <div className='login__wrap'>
        <div className="login__header">
            <h3>login</h3>
            <p>로그인 하셔야 합니다!</p>
        </div>
        
        <form className='login__form'>
            <fieldset>
                <legend className="blind">로그인 영역</legend>
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
                        type="password"
                        id="youPass"
                        name="youPass"
                        placeholder="비밀번호"
                        className="input__style"
                        autoComplete="off"
                    />
                </div>
                <div>
                </div>
                <button type="submit" className="btn__style2 mt30">로그인</button>
            </fieldset>
        </form>
    </div>
    )
}