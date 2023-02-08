import { apiEndPoints } from '../api-constants';
import { Tasks } from './../constants/tasks.enum';

export function getApiForTask(selectedTask: Tasks) {
	if (selectedTask === Tasks.RESIDENT_LIST) {
		return apiEndPoints.WELBI_RESIDENT_LIST
	}
	return apiEndPoints.WELBI_PROGRAM_LIST
}