import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';

import { events } from './data'
import { Calendar, dateFnsLocalizer, momentLocalizer, Event,Views } from 'react-big-calendar'
import withDragAndDrop, { withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop'
import { FC, useMemo, useState } from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'
import { ModalItem } from '../modal'

let allViews = Object.keys(Views).map((k) => Views[k])


moment.locale('pt-br')
const localizer = momentLocalizer(moment)

export const MyCalendar = () => {


  const [value, setvalue] = useState({})
  const [open, setOpen] = useState(false)


  const handleClose = () => {
    setOpen(false)
    setvalue({})
  }

  const handleOpen = (id, title, horaInicial) => {
    let dados = {
      id: id,
      title: title,
      horaInicial: horaInicial,
    }

    setOpen(true);
    setvalue(dados)
  };


  const diasSemanaData = [
    new Date(2022, 9, 16, 0, 0, 0, 0),
    new Date(2022, 9, 17, 0, 0, 0, 0),
    new Date(2022, 9, 18, 0, 0, 0, 0),
    new Date(2022, 9, 19, 0, 0, 0, 0),
    new Date(2022, 9, 20, 0, 0, 0, 0),
    new Date(2022, 9, 21, 0, 0, 0, 0),
    new Date(2022, 9, 22, 0, 0, 0, 0),
  ]

  const { defaultDate } = useMemo(
    () => ({
      defaultDate: new Date(2022, 9, 17),
    }),
    []
  )

  return (
    <>
      <div
        className=
        "relative bg-white flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded "
      >

        <div className="block w-full overflow-x-auto">

          <Calendar
            localizer={localizer}
            events={events}
            defaultView="week"
            selectable
            popup
            defaultDate={defaultDate}
            formats={{
              dayFormat: (date, culture, localizer) =>
                localizer.format(date, 'dddd', culture)
            }}
            style={{ height: 600 }}
            selected
            onSelectEvent={(event) => {
              handleOpen(event.id, event.title, event.start)
            }}
            dayLayoutAlgorithm="no-overlap"
            showMultiDayTimes
                      views={allViews}

            />

          <div className='w-full'>
           <ModalItem open={open}  data={value} handleClose={handleClose} />
        </div>
        </div>



      </div>

    </>

  )
}
