import axios from "axios";

export const GetList = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: "https://dev.api.room.video.wiki/api/list/",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1NjMsInVzZXJuYW1lIjoiYW1hbmogYiA1NjMiLCJleHAiOjE2ODExMzg1MjQsImVtYWlsIjoiYW1hbkB2aWRlby53aWtpIn0.OXyUQixPc1HHzoKJMnGx0oO2hs_1u2gVruY3VDuc1Wg",
      },
    })
      .then((res) => {
        dispatch({ type: "getList", payload: res.data.room_data });
        // setRooms(res.data.room_data);
      })
      .catch((e) => {
        console.log(e.resonse);
      });
  };
};

export const deleteRoom = (roomId) => {
  return (dispatch) => {
    console.log(roomId);
    axios({
      method: "DELETE",
      url: "https://dev.api.room.video.wiki/api/delete/room/",
      data: {
        public_meeting_id: roomId,
      },
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1NjMsInVzZXJuYW1lIjoiYW1hbmogYiA1NjMiLCJleHAiOjE2ODExMzg1MjQsImVtYWlsIjoiYW1hbkB2aWRlby53aWtpIn0.OXyUQixPc1HHzoKJMnGx0oO2hs_1u2gVruY3VDuc1Wg",
      },
    })
      .then(async (res) => {
        dispatch({ type: "deleteRoom", payload: roomId });
      })
      .catch((e) => {
        console.log(e.resonse);
      });
  };
};

export const addRoom = (eventName, passCode, joinNow) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://dev.api.room.video.wiki/api/create/",
      data: {
        event_name: eventName,
        room_code: passCode,
        join_now: joinNow ? "True" : "False",
      },
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1NjMsInVzZXJuYW1lIjoiYW1hbmogYiA1NjMiLCJleHAiOjE2ODExMzg1MjQsImVtYWlsIjoiYW1hbkB2aWRlby53aWtpIn0.OXyUQixPc1HHzoKJMnGx0oO2hs_1u2gVruY3VDuc1Wg",
      },
    })
      .then(async (res) => {
        console.log(res.data);
        var room = {
          room_name: eventName,
          room_url: "https://room.video.wiki//b/" + res.data.public_cast_id,
        };
        dispatch({ type: "addRoom", payload: room });
        // getList();
        if (joinNow) {
          window.location.href = res.data.join_now_url;
          return;
        }
      })
      .catch((e) => {
        console.log(e.resonse);
      });
  };
};

export const shareRoom = (roomId, email) => {
  axios({
    method: "POST",
    url: "https://dev.api.room.video.wiki/api/share/room/",
    data: {
      public_id: roomId,
      user: email,
    },
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1NjMsInVzZXJuYW1lIjoiYW1hbmogYiA1NjMiLCJleHAiOjE2ODExMzg1MjQsImVtYWlsIjoiYW1hbkB2aWRlby53aWtpIn0.OXyUQixPc1HHzoKJMnGx0oO2hs_1u2gVruY3VDuc1Wg",
    },
  }).then((res) => {
    console.log(res.data);
    return (dispatch) => {
      dispatch({ type: "shareRoom" });
    };
  });
};

export const getDetails = (roomId) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url:
          "https://dev.api.room.video.wiki/api/get/room/details/?room_id=" +
          roomId,
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1NjMsInVzZXJuYW1lIjoiYW1hbmogYiA1NjMiLCJleHAiOjE2ODExMzg1MjQsImVtYWlsIjoiYW1hbkB2aWRlby53aWtpIn0.OXyUQixPc1HHzoKJMnGx0oO2hs_1u2gVruY3VDuc1Wg",
        },
      });

      console.log(res.data);
      dispatch({ type: "getDetails", payload: res.data.details });
      // getList();
    } catch (e) {
      console.log(e);
    }
  };
};
