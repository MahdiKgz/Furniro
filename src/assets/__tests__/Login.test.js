import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event"
import Login from "../../pages/Login";


test("makes sure that the inputs get empty after click" , ()=> {
    render(<Login />)
    const userNameInput = screen.getByRole("textbox" , {
        name : /username/i
    })
    const passowrdInput = screen.getByRole("textbox" , {
        name : /password/i
    })

    const button = screen.getByRole("button")

    user.click(userNameInput)
    user.keyboard("MahdiKgz")
    user.click(passowrdInput)
    user.keyboard("Mahdidr77")

    user.click(button)

    expect(userNameInput).toHaveValue("")
    expect(passowrdInput).toHaveValue("")
})

