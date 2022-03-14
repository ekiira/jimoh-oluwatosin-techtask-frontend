import Card from "../../components/Card";
import { defaultProfile } from "../../data";
import {
  ArrowCircleUpIcon,
  ArrowCircleDownIcon,
  BadgeCheckIcon,
} from "@heroicons/react/solid";

function Profile() {
  return (
    <div className="pt-10 pb-20 md:py-20">
      <div className="w-11/12 lg:w-4/5 container mx-auto">
        <div>
          <Card>
            <div>
              <div className="lg:flex w-full">
                <div className="lg:mr-10">
                  <img
                    src={defaultProfile.image}
                    alt="avatar"
                    className="img-rounded w-44 h-40 object-top object-cover mx-auto"
                  />
                </div>
                <div className="w-full text-left mt-10 lg:mt-4">
                  <p className="font-semibold capitalize text-xl md:text-2xl">
                    {defaultProfile.name}
                  </p>
                  <p className="capitalize md:text-lg text-gray-600 flex items-center">
                    <span className="mr-1"> {defaultProfile.shortName}</span>{" "}
                    <BadgeCheckIcon className="h-6 w-6 text-sky-400" />
                  </p>
                  <p className="capitalize text-xs md:text-sm text-blue-500 font-semibold">
                    {defaultProfile.plan}
                  </p>
                  <p className="mt-5">{defaultProfile.description}</p>

                  <p className="flex justify-end mt-10 text-gray-400">
                    Created:{" "}
                    {defaultProfile.created.split("T")[0].replace(/-/g, "/")}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="pt-20">
          <div className="grid md:grid-cols-3 gap-8 h-auto">
            <div className="md:col-span-2">
              <Card>
                <div className="text-left">
                  <h3 className="text-2xl font-semibold border-b border-gray-800 pb-3 mb-5">
                    Today's Stats
                  </h3>

                  <div className="grid grid-cols-3 md:grid-cols-4 py-2 text-sm lg:py-5 items-center border-b border-gray-500 text-gray-700 font-bold lg:text-xl">
                    <div className="col-span-2">
                      <div className="capitalize">Messages sent </div>
                    </div>
                    <div>{defaultProfile.analytics.message.sent} </div>
                    <div className="hidden md:block">
                      <ArrowCircleDownIcon className="text-red-500 h-6 w-6" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 md:grid-cols-4 py-2 text-sm lg:py-5 items-center text-gray-700 font-bold lg:text-xl">
                    <div className="col-span-2">
                      <div className="capitalize">Messages received </div>
                    </div>
                    <div>{defaultProfile.analytics.message.received} </div>
                    <div className="hidden md:block">
                      <ArrowCircleUpIcon className="text-green-500 h-6 w-6" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="h-full w-full">
              <Card>
                <h3 className="text-2xl font-semibold border-b border-gray-800 pb-3 mb-5 text-left">
                  Users Stats
                </h3>
                <div className="text-left">
                  <div className="lg:text-xl py-1 lg:py-3 uppercase font-semibold">
                    Active: <span>{defaultProfile.analytics.user.actived}</span>
                  </div>
                  <div className="lg:text-xl py-1 lg:py-3 uppercase font-semibold">
                    Dormant:{" "}
                    <span>
                      {defaultProfile.analytics.user.total -
                        defaultProfile.analytics.user.actived}
                    </span>
                  </div>
                  <div className="lg:text-xl py-1 lg:py-3 uppercase font-semibold">
                    Total: <span>{defaultProfile.analytics.user.total}</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
