import axios from 'axios'
import { NOTE_BASE_URL, NOTE_CREATOR_NAME } from '~/consts/url'

const NOTE_API_BASE_URL = `${NOTE_BASE_URL}/api`

export class NoteHandler {
  getMyArticles() {
    const url = `${NOTE_API_BASE_URL}/v2/creators/${NOTE_CREATOR_NAME}/contents?kind=note`
    console.log(url)
    const res = axios.get(url)
    return res
  }
}
