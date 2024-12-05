import { Form, useActionData, useNavigation } from "@remix-run/react"
import FormControl from "~/components/FormControl"
import Input from "~/components/Input"
import Label from "~/components/Label"
import RadioButton from "~/components/RadioButton"
import { db } from "~/utils/db.server"
import { redirect, json } from "@remix-run/node"
import { validation } from "~/libs/validation"
import ErrorMsg from "~/components/ErrorMsg"

export const action = async ({ request }: { request: Request }) => {
    const formData = await request.formData()
    const { name, category, money } = Object.fromEntries(formData)
    const fields = { name, category, money }

    const fieldError = {
        name: validation(name),
        category: validation(category),
        money: validation(money)
    }

    if (Object.values(fieldError).some(Boolean)) {
        return json({
            fields,
            fieldError
        }, 400)

    }
    // console.log(Object.fromEntries(formData))

    await db.transaction.create({
        data: {
            name: formData.get("name") as string,
            money: Number(formData.get("money")),
            category: {
                create: {
                    name: formData.get("category") as string
                }
            }
        }
    })

    return redirect('/');
}

function NewTransaction() {
    const { state } = useNavigation()
    const actionData = useActionData<{
        fields: { name: string; category: string; money: string };
        fieldError: { name?: string; category?: string; money?: string };
    }>()
    const isLoading = state === "submitting"
    return (
        <div className="grid sm:justify-center text-black" >
            <Form method="post" className="bg-white p-4 rounded-md space-y-3 sm:w-[50vw]">
                <h3>New Transaction</h3>
                <FormControl>
                    <Label text="Name" />
                    <Input name="name" type="text" defaultValue={actionData?.fields.name} />
                    <ErrorMsg id="name" message={actionData?.fieldError?.name || ''} />
                </FormControl>
                <FormControl>
                    <Label text="Category" />
                    <div className="space-x-4">
                        <RadioButton name="category" value="income" text="Income" defaultChecked={actionData?.fields.category === "income"} />
                        <RadioButton name="category" value="expense" text="Expense" defaultChecked={actionData?.fields.category === "expense"} />
                    </div>
                    <ErrorMsg id="category" message={actionData?.fieldError?.category || ''} />
                </FormControl>
                <FormControl>
                    <Label text="Money" />
                    <Input name="money" type="number" defaultValue={actionData?.fields.money} />
                    <ErrorMsg id="money" message={actionData?.fieldError?.money || ''} />
                </FormControl>
                <div>
                    <button
                        disabled={isLoading}
                        type="submit" className="bg-blue-500 disabled:cursor-not-allowed hover:bg-blue-700 text-white px-4 py-1">
                        {isLoading ? "Saving..." : "Save"}
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default NewTransaction
