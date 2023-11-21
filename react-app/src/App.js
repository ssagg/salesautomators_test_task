import { useEffect } from "react";
import { useForm } from "@beekai/react";
import AppExtensionsSDK, { Command } from "@pipedrive/app-extensions-sdk";

async function init() {
  const sdk = await new AppExtensionsSDK().initialize();
  await sdk.execute(Command.RESIZE, {
    width: 1000,
    height: 600,
  });
}

function App() {
  useEffect(() => {
    init();
  }, []);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    formId: "41cc9d23-53d4-4eea-b36a-02600c0ec177",
    // defaultValues: {
    //   fName: "",
    //   lName: "",
    //   phone: "",
    //   email: "",
    //   jobType: "",
    //   jobSource: "",
    //   jobDescription: "",
    //   date: "",
    //   startTime: "08:00",
    //   endTime: "18:00",
    //   testSelect: "",
    //   address: "",
    //   city: "",
    //   state: "",
    //   zip: "",
    //   area: "",
    // },
  });
  async function closeModal() {
    const sdk = await new AppExtensionsSDK().initialize();
    await sdk.execute(Command.CLOSE_MODAL);
  }

  async function showSnackBar(message) {
    const sdk = await new AppExtensionsSDK().initialize();
    await sdk.execute(Command.SHOW_SNACKBAR, {
      message,
    });
  }
  function handleForm(id, data) {
    console.log(data);

    fetch("https://8344-181-84-120-8.ngrok-free.app/api/button", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      dataType: "json",
      body: JSON.stringify({ id, data }),
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          showSnackBar("Job was created successfully");
          return response.json();
        }
      })

      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setTimeout(() => {
          closeModal();
        }, 3000);
      });
  }

  function onSubmit(data) {
    let idA = window.location.href.split("=");
    let a = idA
      .find((item) => {
        return item.includes("&id");
      })
      .split("&");
    handleForm(a[0], data);
  }

  return (
    <div className='container mx-auto'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center justify-center justify-items-center self-center'
      >
        <div className='grid grid-cols-2 auto-rows-auto gap-4'>
          <div className='flex flex-col border-solid rounded-md border-gray border-2 p-3 shadow-md'>
            <h2 className='text-black text-left font-medium p-1 text-xl'>
              Client details
            </h2>

            {errors.root?.serverError && (
              <p>Something went wrong, and please try again.</p>
            )}

            <div className='flex flex-col gap-2 p-1'>
              <div className='flex flex-row gap-2'>
                <input
                  className='border-solid rounded-md border-gray border-2 p-2 shadow-none w-full'
                  {...register("fName")}
                  placeholder='First name'
                  type='text'
                />

                <input
                  className='border-solid rounded-md border-gray border-2 p-2 shadow-none w-full'
                  {...register("lName")}
                  placeholder='Last name'
                  type='text'
                />
              </div>

              <input
                {...register("phone")}
                placeholder='Phone'
                type='tel'
                className='border-solid rounded-md border-gray border-2 p-2 shadow-none'
              />

              <input
                {...register("email")}
                placeholder='Email'
                type='email'
                className='border-solid rounded-md border-gray border-2 p-2 shadow-none'
              />
            </div>
          </div>
          <div className='flex flex-col border-solid rounded-md border-gray border-2 p-3 shadow-md'>
            <h2 className='text-black text-left font-medium p-1 text-xl'>
              Job details
            </h2>
            <div className='flex flex-col gap-2 p-1'>
              <div className='flex flex-row gap-2'>
                <select
                  {...register("jobType")}
                  className=' border-solid rounded-md border-gray border-2 p-2 shadow-none w-full'
                >
                  <option value='Job 1'>Job 1</option>
                </select>

                <select
                  {...register("jobSource")}
                  className=' border-solid rounded-md border-gray border-2 p-2 shadow-none w-full'
                >
                  <option value='Job 1'>Job 2</option>
                </select>
              </div>

              <textarea
                {...register("jobDescription")}
                placeholder='Job description'
                type='textarea'
                className=' border-solid rounded-md border-gray border-2 p-2 shadow-none'
              />
            </div>
          </div>
          <div className='flex flex-col border-solid rounded-md border-gray border-2 p-3 shadow-md'>
            <h2 className='text-black text-left font-medium p-1 text-xl'>
              Service location
            </h2>
            <div className='flex flex-col gap-2 p-1'>
              <input
                {...register("address")}
                placeholder='Address'
                type='search'
                className=' border-solid rounded-md border-gray border-2 p-2 shadow-none'
              />

              <input
                {...register("city")}
                placeholder='City'
                type='text'
                className=' border-solid rounded-md border-gray border-2 p-2 shadow-none'
              />

              <input
                {...register("state")}
                placeholder='State'
                type='text'
                className=' border-solid rounded-md border-gray border-2 p-2 shadow-none'
              />
              <div className='flex flex-row gap-2'>
                <input
                  {...register("zip")}
                  placeholder='ZIP'
                  type='text'
                  className=' border-solid rounded-md border-gray border-2 p-2 shadow-none w-full'
                />

                <select
                  {...register("area")}
                  className=' border-solid rounded-md border-gray border-2 p-2 shadow-none w-full'
                >
                  <option value='Area'>Area</option>
                </select>
              </div>
            </div>
          </div>
          <div className='flex flex-col border-solid rounded-md border-gray border-2 p-3 shadow-md'>
            <h2 className='text-black text-left font-medium p-1 text-xl'>
              Scheduled
            </h2>
            <div className='flex flex-col gap-2 p-1'>
              <input
                {...register("date")}
                type='date'
                className='border-solid rounded-md border-gray border-2 p-2 shadow-none text-black w-full'
              />

              <div className='flex flex-row gap-2'>
                <input
                  {...register("startTime")}
                  type='time'
                  className='border-solid rounded-md border-gray border-2 p-2 shadow-none text-black w-full'
                />

                <input
                  {...register("endTime")}
                  type='time'
                  className='border-solid rounded-md border-gray border-2 p-2 shadow-none text-black w-full'
                />
              </div>

              <select
                {...register("testSelect")}
                className='border-solid rounded-md border-gray border-2 p-2 shadow-none text-black w-full'
              >
                <option value='Test select'>Test select</option>
              </select>
            </div>
          </div>

          <button
            disabled={isSubmitting}
            className='btn-save border-2 border-solid rounded-3xl text-black px-3 py-2 text-xl font-bold bg-gray-300 shadow-md'
          >
            Create job
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
