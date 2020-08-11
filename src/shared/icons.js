import React from'react'
import BugReportRoundedIcon from '@material-ui/icons/BugReportRounded';
import AdjustIcon from '@material-ui/icons/Adjust';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import HourglassFullRoundedIcon from '@material-ui/icons/HourglassFullRounded';
import LocalCafeRoundedIcon from '@material-ui/icons/LocalCafeRounded';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

export const icon={
	"bugReport": <BugReportRoundedIcon className="float-left"/>,
	"outOfOrder": <AdjustIcon className="float-left"/>,
	"Reserved": <CheckBoxIcon className="float-left" />,
	"Occupied": <HourglassFullRoundedIcon className="float-left"/>,
	"Banquet": <LocalCafeRoundedIcon className="float-left"/>,
	"Gym": <AccessibilityIcon className="float-left"/>,
	"Vacant": <LockOpenRoundedIcon className="float-left"/>,
	"DueOut": <ExitToAppRoundedIcon className="float-left"/>,
}